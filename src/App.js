

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';


const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
        let arr = localStorage.getItem('react-notes-app-data')
		if (arr) {
            let obj = JSON.parse(arr);
			setNotes(obj);
		}
	}, []);

	useEffect(() => {
		if(notes.length>0){
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
		}
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		
		setNotes([...notes, newNote]);
	};

	const deleteNote = (id) => {
		const update = notes.filter((item) => item.id !== id);
    localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
		setNotes(update);
	};

	return (
		<div className={`${!darkMode && 'dark-mode'}`}>
			<div className='container'>
			
                <div className='header'>
			          <h1>Sticky Notes</h1>
			          <button
			               onClick={() => setDarkMode(!darkMode)}
			               className='save'>
			               {!darkMode ? "Day Mode" : "Night Mode"}
			          </button>
		        </div>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((item) =>
						item.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;









// import React, { useState } from 'react'

// export default function App() {
// 	const [swap , setSwap] = useState(true);

// 	function swapColor(){
// 		setSwap(!swap)
// 	}
//   return (
// 	<>
// 	<div style={ swap ? {"backgroundColor":"black"} : {"backgroundColor":"blue"}}>
// hi
// 	</div>
// 	<button onClick={swapColor}>Swap</button>
// 	<div style={ swap ? {"backgroundColor":"blue"} : {"backgroundColor":"black"} }>
//       hello
// 	</div>
// 	</>
//   )
// }
