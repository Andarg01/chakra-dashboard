// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaTags,
//     FaClipboardList,
//     FaShoppingCart,
// } from 'react-icons/fa';
// import { RiAdminFill } from 'react-icons/ri';
// import { AiOutlineSafetyCertificate } from 'react-icons/ai';
// import { BsPerson } from 'react-icons/bs';
// import { IoIosContacts } from 'react-icons/io';
// import { NavLink } from 'react-router-dom';
// import { Flex, Box, Heading, Icon } from '@chakra-ui/react';

// interface MenuItem {
//     path: string;
//     name: string;
//     icon: JSX.Element;
// }

// const Sidebar: React.FC = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     const menuItems: MenuItem[] = [
//         {
//             path: '/',
//             name: 'Dashboard',
//             icon: <FaTh />,
//         },
//         {
//             path: '/login',
//             name: 'Login',
//             icon: <FaUserAlt />,
//         },
//         {
//           path: '/signup',
//           name: 'Register form',
//           icon: <FaUserAlt />,
//       },
//         {
//             path: '/analytics',
//             name: 'Analytics',
//             icon: <FaRegChartBar />,
//         },
//         {
//             path: '/review',
//             name: 'CustemerReview',
//             icon: <FaCommentAlt />,
//         },
//         {
//             path: '/product',
//             name: 'Product',
//             icon: <FaShoppingBag />,
//         },
//         {
//             path: '/category',
//             name: 'Category List',
//             icon: <FaTags />,
//         },
//         {
//           path: '/orders',
//           name: 'Orders',
//           icon: <FaClipboardList />,
//       },
//       {
//         path: '/shop',
//         name: 'Sample product',
//         icon: <FaShoppingCart />,
//     },
//     // {
//     //     path: '/contact',
//     //     name: 'Contact page',
//     //     icon: <IoIosContacts />,
//     // },
//     {
//         path: '/roles',
//         name: 'Roles of user',
//         icon: <RiAdminFill />,
//     },
//     {
//         path: '/user',
//         name: 'user page',
//         icon: <BsPerson />,
//     },
//     {
//         path: '/permission',
//         name: 'permission information',
//         icon: <AiOutlineSafetyCertificate />,
//     },
//     ];

//     return (
//         <Flex>
//             <Box
//                 w={isOpen ? '200px' : '50px'}
//                 className="sidebar"
//                 bgColor="gray.200"
//                 color="white"
//             >
//                 <Flex alignItems="center" p="2">
//                     <Heading
//                         as="h1"
//                         display={isOpen ? 'block' : 'none'}
//                         size="md"
//                     >
//                         Logo
//                     </Heading>
//                     <Box ml={isOpen ? '50px' : '0px'} className="bars">
//                         <FaBars onClick={toggle} />
//                     </Box>
//                 </Flex>
//                 {menuItems.map((item, index) => (
//                     <NavLink
//                         to={item.path}
//                         key={index}
//                         className="link"
//                         //  activeClassName="active"
//                     >
//                         <Flex alignItems="center" p="2">
//                             <Icon as={item.icon} mr="2" />
//                             <Box
//                                 display={isOpen ? 'block' : 'none'}
//                                 className="link_text text-sm"
//                             >
//                                 {item.name}
//                             </Box>
//                         </Flex>
//                     </NavLink>
//                 ))}
//             </Box>
//             <main>{children}</main>
//         </Flex>
//     );
// };

// export default Sidebar;
