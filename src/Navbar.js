  import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


const Link = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Navbar = () => (
<div className="navbar">
  <div className="logo">Pizza Customization</div>
  <div className="navbar-middle">
    <a href="/locations">LOCATIONS</a>
    <a href="/menu" >MENU</a>
    <a href="/rewards">REWARDS</a>
  </div>
  <div className="navbar-right">
    <button className="order-now">ORDER NOW</button>
  </div>
</div>
);

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       Pizza Order App
//     </Link>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/sizes">
//             Sizes
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/toppings">
//             Toppings
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/cart">
//             Cart
//             </Link>
//         </li>
//         </ul>
//         </div>
//         </nav>
//       )

      export default Navbar
