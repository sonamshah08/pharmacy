// async function initializeApp() {
//   try {
//     // Create a TypeORM connection to the in-memory database
//     const dataSource = new DataSource({
//       type: 'sqlite',
//       database: ':memory:',
//       entities: ["src/**/*{.entity.ts}"],
//       synchronize: true,
//       logging: true,
      
//     });

//     // Get the repository for the User entity
//     let pharmacyRepository: Repository<Pharmacy>;
//     pharmacyRepository = dataSource.getRepository(Pharmacy);
//     let data = { name: 'John Doe','location':'xx' };
//     // Insert a user into the User table
//     const newUser = pharmacyRepository.create(data);
//     await pharmacyRepository.save(newUser);

//     console.log('User added:', dataSource);
//   } catch (error) {
//     console.error('Error initializing the application:', error);
//   }
// }

// initializeApp();
 
// createDatabaseConnection()
// .then((dataSource) => {
//   // Use middleware to connect to the database
//   app.use(async (req, res, next) => {
//     try {
//       req.app.locals.dbConnection = dataSource;
//       next();
//     } catch (error) {
//       console.error('Error connecting to the database:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//       app.use(express.json());
//       app.use('/', router);
//       router.get('/', (req, res) => {
//         res.send('Hello, World!');
//       });
//       // Start the server
//       app.listen(port, () => {
//         console.log(`Server is running at http://localhost:${port}`);
//       }); 

// })
// .catch((error) => {
//   console.error('Error creating database connection:', error);
// });
