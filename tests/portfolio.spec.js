import { test, expect } from '@playwright/test'

const pages = [
  ['/portfolio', '.portfolio', 'en'],
  ['/', '.portfolio', 'ja'],
  ['/resume', '.resume', 'en'],
  ['/resumejp', '.resume', 'ja'],
  ['/about', '.about', 'en'],
  ['/aboutjp', '.aboutjp', 'ja'],
]

test.beforeEach(async ({ page }) => {
  // External demos and fonts are outside this application's regression scope.
  await page.route('**/*', route => {
    const url = new URL(route.request().url())
    return url.hostname === '127.0.0.1' ? route.continue() : route.abort()
  })
})

for (const [path, selector, language] of pages) {
  test(`direct access and reload: ${path}`, async ({ page }) => {
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(`/#${path}`)
    await expect(page.locator(selector).first()).toBeVisible()
    await expect(page.locator('html')).toHaveAttribute('lang', language)
    await page.reload()
    await expect(page.locator(selector).first()).toBeVisible()
    await expect(page.locator('#nav1')).toBeVisible({ visible: language === 'en' })
    await expect(page.locator('#nav2')).toBeVisible({ visible: language === 'ja' })
    expect(errors).toEqual([])
  })
}

for (const [english, japanese] of [['/portfolio', '/'], ['/resume', '/resumejp'], ['/about', '/aboutjp']]) {
  test(`language switch and browser history: ${english}`, async ({ page }) => {
    await page.goto(`/#${english}`)
    await page.locator('#Ja').click()
    await expect(page).toHaveURL(new RegExp(`#${japanese}$`))
    await expect(page.locator('#nav2')).toBeVisible()
    await page.goBack()
    await expect(page.locator('#nav1')).toBeVisible()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.goForward()
    await expect(page.locator('#nav2')).toBeVisible()
    await page.locator('#En').click()
    await expect(page).toHaveURL(new RegExp(`#${english}$`))
    await expect(page.locator('#nav1')).toBeVisible()
  })
}

test('navigation links render each English page', async ({ page }) => {
  await page.goto('/#/portfolio')
  for (const [name, path, heading] of [
    ['Resume', '/resume', 'Soichiro Wada'],
    ['About', '/about', 'Soichiro Wada'],
    ['Portfolio', '/portfolio', "Soichiro's Portfolio"],
  ]) {
    await page.locator('#nav1').getByRole('link', { name, exact: true }).click()
    await expect(page).toHaveURL(new RegExp(`#${path}$`))
    await expect(page.locator('h1')).toHaveText(heading)
  }
})

test('old Japanese Portfolio URL redirects to the new root', async ({ page }) => {
  await page.goto('/#/portfoliojp')
  await expect(page).toHaveURL(/#\/$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'ja')
  await expect(page.locator('.portfolio').first()).toBeVisible()
})

test('Japanese Portfolio navigation returns to the root', async ({ page }) => {
  await page.goto('/#/aboutjp')
  await page.locator('#nav2').getByRole('link', { name: 'Portfolio', exact: true }).click()
  await expect(page).toHaveURL(/#\/$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'ja')
  await expect(page.locator('.portfolio').first()).toBeVisible()
})
