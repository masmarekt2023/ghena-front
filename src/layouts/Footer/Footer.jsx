import React ,{Suspense} from "react";
import useSWR from 'swr';
import Apiconfigs from "src/Apiconfig/Apiconfigs";

import { CgFacebook } from "react-icons/cg";
import { FaTelegram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import './footer.css';
import Container from '@mui/material/Container'
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
const fetcher = url => axios.get(url).then(res => res.data.result);
const { data: staticContent } = useSWR(Apiconfigs.staticContentList, fetcher, { suspense: true })
const { data: socialLinks } = useSWR(Apiconfigs.listSocial, fetcher, { suspense: true })
console.log(socialLinks)
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#640D5F",
       

        padding: "40px 20px",
        color: "white",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
      }}
      className="footer"
    >
        <Container maxWidth='xl'>

      <div
        style={{
          
        //   alignItems: "flex-start",

        }}
        className="footer-content"
      >
        {/* Logo Section */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/">
          <img
            src="../../../public/assets/Images/logo.png"
            alt="Logo"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          />
          </Link> 
          <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>MAS Platform</h3>
        </div>

        {/* Marketplace Section */}
        <div>
          <h3 style={styles.sectionHeader}>Marketplace Section</h3>
          {staticContent.slice(0, 4).map((row) => (
            <>
            <Link
                        style={{ color: 'white', textDecoration: 'none', }}
                        to={"/corporate/" + row.type}
                        state={{
                          data: {
                            title: row.title,
                            html: row.description
                          }
                        }}
                      >
                       
                     
            <li key={row.title} style={styles.listItem}>
                <span>{row.title}</span>
                <div style={styles.divider} />
                <div style={styles.dot} />
              </li>
              </Link>
            
            </>
              
            ))}
      

        </div> 
           

        {/* My Account Section */}
        <div>
          <h3 style={styles.sectionHeader}>My Account</h3>
          <ul style={styles.list}>
          {staticContent.slice(4,8).map((row) => (
            <>
            <Link
                        style={{ color: 'white', textDecoration: 'none', }}
                        to={"/corporate/" + row.type}
                        state={{
                          data: {
                            title: row.title,
                            html: row.description
                          }
                        }}
                      >
                       
                     
            <li key={row.title} style={styles.listItem}>
                <span>{row.title}</span>
                <div style={styles.divider} />
                <div style={styles.dot} />
              </li>
              </Link>
            
            </>
              
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div >
          <h3 style={{ ...styles.sectionHeader, marginBottom: "20px" }}>Join The Community</h3>
          <div style={styles.iconsContainer} className="iconContainer">
          <div  style={styles.iconContainer} >
          <Link to={socialLinks[0]?.link} target="_blank" rel="noreferrer">
              <CgFacebook  style={styles.icon}/>
            </Link>

            </div>


            <div  style={styles.iconContainer} >
          <Link to={socialLinks[3]?.link} target="_blank" rel="noreferrer">
              <FaTelegram  style={styles.icon}/>
            </Link>

            </div>


            

            <div  style={styles.iconContainer} >
          <Link to={socialLinks[2]?.link} target="_blank" rel="noreferrer">
              <FaTwitterSquare  style={styles.icon}/>
            </Link>

            </div>
        
            <div  style={styles.iconContainer} >
          <Link to={socialLinks[1]?.link} target="_blank" rel="noreferrer">
              <FaYoutube  style={styles.icon}/>
            </Link>

            </div>

            <div  style={styles.iconContainer} >
          <Link to={socialLinks[4]?.link} target="_blank" rel="noreferrer">
              <SiAppstore  style={styles.icon}/>
            </Link>

            </div>


            <div  style={styles.iconContainer} >
          <Link to={socialLinks[4]?.link} target="_blank" rel="noreferrer">
              <SiGoogleplay  style={styles.icon}/>
            </Link>

            </div>
           
          </div>
        </div>
      </div>
      </Container>

    </footer>
  );
};

const styles = {
  sectionHeader: {
    marginBottom: "15px",
    fontSize: "22px",
    fontWeight: "bold",
    textShadow: "0px 0px 10px #FF80FF, 0px 0px 20px #FF80FF",
  },
  list: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "18px",
  },
  divider: {
    flexGrow: 1,
    height: "1px",
    backgroundColor: "white",
    margin: "0 10px",
  },
  dot: {
    width: "12px",
    height: "12px",
    background: "linear-gradient(to top right, #FF80FF, #EAADEA)",
    borderRadius: "50%",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  icon: {
    color: "white",
    fontSize: "28px",
    transition: "transform 0.3s ease-in-out",
  },
  iconContainer: {
    background: "linear-gradient(to top, #0c0131, rgba(156, 1, 156, 0.7))",
    borderRadius: "50%",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    transition: "transform 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Footer;
