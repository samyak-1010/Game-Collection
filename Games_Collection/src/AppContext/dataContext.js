import { useEffect,useState ,createContext,useContext} from "react";
export const DataContext=createContext();
export const DataContextProvider=({children})=>{
    const [gameName,setGameName]=useState("sagar");
    const [gameLink,setGameLink]=useState("");
    return(
        <DataContext.Provider value={{gameName,gameLink,setGameName,setGameLink}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;