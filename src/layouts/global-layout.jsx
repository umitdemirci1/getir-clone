import Navbar from "../components/navbar/navbar";

const GlobalLayout = ({children}) => {
    return ( 
        <div>
            <Navbar />
            {children}
        </div>
     );
}
 
export default GlobalLayout;