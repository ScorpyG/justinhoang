export function getPageTitle(pagePath: string): string {
  switch (pagePath) {
    case '/':
      return 'Home';
    case '/about':
      return 'About';
    case '/contact':
      return 'Contact';
    case '/projects':
      return 'Projects';
    default:
      return '404';
  }
}
