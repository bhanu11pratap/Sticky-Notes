import { MdDeleteForever } from 'react-icons/md';

const Note = (props) => {
	return (
		<div className='note' style={{"backgroundColor":`${props.color}`}}>
			<span>{props.text}</span>
			<div className='note-footer'>
				<small>{props.date}</small>
				
				<MdDeleteForever
					onClick={() => props.handleDeleteNote(props.id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;