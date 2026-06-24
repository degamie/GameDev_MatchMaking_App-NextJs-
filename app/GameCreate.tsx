//WID(24/6/2026)(Sarthak Mittal(DegamieSign(GameCreate)
export default function GameCreate(){
    const[selectedGame,setSelectedGame]=useState<string>("");
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);
    	const [selectedPlayer, setSelectedPlayer] = useState<string>("");
    	const { setChannel } = useContext(ChannelContext);
    	const [error, setError] = useState<boolean>(true);
    	const router = useRouter();
    	const handleCopy = () => setCopied(true);
}