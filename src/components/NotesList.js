import Note from './Note';
import AddNote from './AddNote';
import { useState } from 'react';

const NotesList = (props) => {
	const [color , setColor] = useState("");

	function changeColor(value){
     
		setColor(value);
	   

	}
	return (
		<div className='notes-list'>
			{props.notes.map((item) => (
				<Note
				    key={item.id}
					id={item.id}
					text={item.text}
					date={item.date}
					handleDeleteNote={props.handleDeleteNote}
					color={color}
				/>
			))}
			<AddNote handleAddNote={props.handleAddNote} changeColor={changeColor} color={color} />
		</div>
	);
};

export default NotesList;