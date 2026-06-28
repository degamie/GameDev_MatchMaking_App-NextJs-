//WID(26/6/2026)(Sarthak Mittal(DegamieSign(GameCreate)#1
export default function GameCreate(){
	const [gametype,setgametype]=useState<string>("type");
    const[selectedGame,setSelectedGame]=useState<string>("");
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);
    	const [selectedPlayer, setSelectedPlayer] = useState<string>("");
    	const { setChannel } = useContext(ChannelContext);
    	const [error, setError] = useState<boolean>(true);
    	const router = useRouter();
    	const handleCopy = () => setCopied(true);
		const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
			e.preventDefault();
			setButtonClicked(true);	
		}
}