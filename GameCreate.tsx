//WID(9/8/2026)(Sarthak Mittal(DegamieSign(GameCreate)#1
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
constructor(selectedGame:string){
		this.selectedGame=selectedGame;
	}
	setgametype(gametype){this.gametype=gametype;}

export default function GameCreate(){
	
	const [gametype,setgametype]=useState<string>("type");
    const[selectedGame,setSelectedGame]=useState<string>("");
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);
    	const [selectedPlayer, setSelectedPlayer] = useState<string>("");
    //	const {channel,setChannel } = useContext(ChannelContext);
    	const [error, setError] = useState<boolean>(true);
    	const router = useRouter();
    //	const handleCopy = () => setCopied(true);
		const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
			e.preventDefault();
			setButtonClicked(true);	
		}
}