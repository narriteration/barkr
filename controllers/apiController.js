function index(req, res) {
  res.json({
    message: 'Hottest doggy dating site- Barkr!',
    documentation_url: 'https://github.com/sf-wdi-labs/Barkr',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/', description: 'View the index, very exciting'
      },
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      },
      {
        method: 'GET', path: '/api/dogs', description: 'View all dogs in our DB'
      },
      {
        method: 'GET', path: '/api/dogs/:id', description: 'View specific dog by ID'
      },
      {
        method: 'POST', path: '/api/dogs', description: 'Create a new dog'
      },
      {
        method: 'PUT', path: '/api/dogs/:id', description: 'Update current dog'
      },
      {
        method: 'DELETE', path: '/api/dog/:id', description: 'Delete a dog by its specific ID'
      },
    ]
  });
};
module.exports = {
  index: index
};
