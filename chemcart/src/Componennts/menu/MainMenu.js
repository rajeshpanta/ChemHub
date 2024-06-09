import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';  // Ensure the CSS is properly linked

class MainMenu extends Component {
  constructor(props) {
    super(props);
   this.menuItems = [
      {
        title: "Polymers",
        subItems: ["Key industries include Agriculture, Appliances, Automotive & Transportation, Construction, Electrical & Electronics, Food & Beverage Packaging, Household, Material Handling, Medical, Personal Care, and Textile."]
      },
      {
        title: "Coatings",
        subItems: ["Targets Industrial applications, Interior Paints, Wood, Exterior Paints, Metal Paints, and Plastic Paints."]
      },
      {
        title: "Adhesives",
        subItems: ["Focused on Paper and Packaging, Industrial Adhesives, Wood Adhesives, and Book Binding & Lamination."]
      },
      {
        title: "Batteries",
        subItems: ["Lithium Ion Batteries", "Lead Acid Batteries"]
      },
      {
        title: "Rubber",
        subItems: ["Primarily serves the Automotive, Construction, and Shoe industries."]
      },
      {
        title: "Oil & Gas",
        subItems: ["Concentrates on the BioTech sector."]
      },
      {
        title: "Sustainability Solutions",
        subItems: ["Includes Polymers for Flexible & Rigid Packaging and Coatings for Solvent & Water-based Paintings."]
      }
    ];
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '0 20px',
        marginTop: '10px',
        height: 'auto'
      }}>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: '0',
          margin: '0',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          {this.menuItems.map((item, index) => (
            <li key={index} style={{
              padding: '10px 15px',
              cursor: 'pointer',
              position: 'relative'
            }}>
              {item.title}
              <div className="dropdownContent">
                {item.subItems.map((sub, subIndex) => (
                  <p key={subIndex}>{sub}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainMenu;