import { useState } from 'react';

const AddNote = ({ handleAddNote , changeColor , color }) => {
	const [noteText, setNoteText] = useState('');
	
	const characterLimit = 200;



	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new' style={{"backgroundColor":`${color}`}} >
			<textarea
			style={{"backgroundColor":`${color}`}}
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={(e)=>{
					if (characterLimit - e.target.value.length >= 0) {
					setNoteText(e.target.value);
				}}}
			></textarea>
			<div className='note-footer' >
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<select 
				className='option'
				onChange={(e)=>changeColor(e.target.value)} 
				style={{"backgroundColor":`${color}` , "color":"black" , "border":"none"}}>
				<option value="">Default</option>
					<option value="red">Red</option>
					<option value="orange">Orange</option>
					<option  value="aqua">Blue</option>
				</select>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;