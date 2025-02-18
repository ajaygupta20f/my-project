// // src/components/UserProfile.tsx
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
// import { animated, useSpring } from '@react-spring/web';

// // TypeScript Interface for User Data
// interface UserData {
//   id: number;
//   name: string;
//   address: string;
//   email: string;
//   phone: string;
// }

// // Helper Function to Get Data from Local Storage
// const getUserDataFromStorage = (): UserData => {
//   const savedData = localStorage.getItem('userData');
//   return savedData ? JSON.parse(savedData) : {
//     id: Date.now(),
//     name: '',
//     address: '',
//     email: '',
//     phone: ''
//   };
// };

// const UserProfile: React.FC = () => {
//   // State Management
//   const [userData, setUserData] = useState<UserData>(getUserDataFromStorage());
//   const [isEditing, setIsEditing] = useState<boolean>(false);

//   // Animation Config for Edit Mode
//   const editSpring = useSpring({
//     opacity: isEditing ? 1 : 0,
//     transform: isEditing ? 'translateY(0px)' : 'translateY(-20px)',
//     config: { tension: 120, friction: 14 }
//   });

//   // Handle Input Change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   // Save Data to Local Storage
//   const handleSave = () => {
//     localStorage.setItem('userData', JSON.stringify(userData));
//     alert('User data saved successfully!');
//     setIsEditing(false);
//   };

//   // Toggle Edit Mode
//   const toggleEditMode = () => setIsEditing(!isEditing);

//   // Effect to Sync with Local Storage
//   useEffect(() => {
//     localStorage.setItem('userData', JSON.stringify(userData));
//   }, [userData]);

//   return (
//     <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4, boxShadow: 3 }}>
//       <CardContent>
//         <Typography variant="h4" gutterBottom>
//           User Profile
//         </Typography>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="h6">Name:</Typography>
//           {isEditing ? (
//             <animated.div style={editSpring}>
//               <TextField
//                 name="name"
//                 value={userData.name}
//                 onChange={handleChange}
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//               />
//             </animated.div>
//           ) : (
//             <Typography>{userData.name || 'N/A'}</Typography>
//           )}
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="h6">Address:</Typography>
//           {isEditing ? (
//             <animated.div style={editSpring}>
//               <TextField
//                 name="address"
//                 value={userData.address}
//                 onChange={handleChange}
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//               />
//             </animated.div>
//           ) : (
//             <Typography>{userData.address || 'N/A'}</Typography>
//           )}
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="h6">Email:</Typography>
//           {isEditing ? (
//             <animated.div style={editSpring}>
//               <TextField
//                 name="email"
//                 value={userData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//               />
//             </animated.div>
//           ) : (
//             <Typography>{userData.email || 'N/A'}</Typography>
//           )}
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="h6">Phone:</Typography>
//           {isEditing ? (
//             <animated.div style={editSpring}>
//               <TextField
//                 name="phone"
//                 value={userData.phone}
//                 onChange={handleChange}
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//               />
//             </animated.div>
//           ) : (
//             <Typography>{userData.phone || 'N/A'}</Typography>
//           )}
//         </Box>
//         <Box sx={{ textAlign: 'center', mt: 2 }}>
//           {isEditing ? (
//             <Button variant="contained" color="primary" onClick={handleSave}>
//               Save
//             </Button>
//           ) : (
//             <Button variant="contained" color="secondary" onClick={toggleEditMode}>
//               Edit
//             </Button>
//           )}
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default UserProfile;
