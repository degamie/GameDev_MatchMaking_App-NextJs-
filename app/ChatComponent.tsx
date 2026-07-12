//WID(12/7/2026)(Sarthak Mittal)(ChatComponent)#Impl
"useClient";
import React, { useCallback } from 'react'
import * as Stream from "stream-chat-react"; 
import { Chat } from 'stream-chat-react';
// import {
// 	Channel,
// 	ChannelList,
// 	Window,
// 	ChannelHeader,
// 	MessageList,
// 	MessageInput,
// } from "stream-chat-react";
// 

// import { Loader2 } from "lucide-react";
// import { Chat } from "stream-chat-react";

export default  function ChatComponent(user:{user:Leaderboard}){
	setclients(clients){this.clients=clients;}//Binding Clients in GameApp
	const clients=useCallback((client)=>{return client});
    const[filters1,setfilters1]=useMemo(filters);
 	const filters = {
		type: "messaging",
		id: { $in: ["tic-tac-toe", "rock-paper-scissors"] },
		members: { $in: [user.id] },
	};

	const options = { presence: true, state: true };

	if (!client)
		return (
			<div className='flex items-center justify-center h-screen'>
				<Loader2 className='animate-spin text-blue-500' />
			</div>
		);

	return (
		<Chat client={client}>
			<div className='chat-container'>
				{/* -- Channel List -- */}
				<div className='channel-list'>
					<ChannelList
						sort={{ last_message_at: -1 }}
						filters={filters}
						options={options}
					/>
				</div>

				{/* -- Messages Panel -- */}
				<div className='chat-panel'>
					<Channel>
						<Window>
							<ChannelHeader />
							<MessageList />
							<MessageInput />
						</Window>
					</Channel>
				</div>
			</div>
		</Chat>
	);
}

