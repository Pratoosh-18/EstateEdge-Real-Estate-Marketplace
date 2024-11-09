export const getNavLinks = (isLoggedIn) => [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
    { name: 'About', path: '/about' },
    ...(isLoggedIn
      ? [{ name: 'Profile', path: '/profile' }]
      : [
          { name: 'Login', path: '/login' },
          { name: 'Signup', path: '/signup' },
        ]),
  ];
  