export const APP_CONSTANTS: any = {
  MENU: [
    { name: 'shop', href: '/shop' },
    {
      name: 'recipes', href: '/recipes/categories', children: [
        { name: 'categories', href: '/recipes/categories' },
        { name: 'collections', href: '/recipes/collections' },
        { name: 'resources', href: '/recipes/resources' }
      ]
    },
    { name: 'learn', href: '/learn' },
    { name: 'about', href: '/about' },
    { name: 'blog', href: '/blog' },
  ]
}