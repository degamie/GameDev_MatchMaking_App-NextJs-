//WID(15/8/2026)(Sarthak Mittal(DegamieSign(GameCreate)#1.1
import { useRouter } from "next/dist/client/router";
import { constructor, useContext, useState } from "react";
const gamecrt=useCallback(GameCreate());
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
constructor(selectedGame:string,buttonClicked:useState<boolean>(true)){
	this.buttonClicked=buttonClicked;

	this.gametype=gametype;
		this.selectedGame=selectedGame;
	}
	setgametype(gametype){this.gametype=gametype;}
}


	
	
}