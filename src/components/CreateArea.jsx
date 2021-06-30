import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const [isExpanded, setExpand] = useState(false);

    function expand(){
      setExpand(true);
    }

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote=> {
            return{
            ...prevNote,
            [name]:value
        };
        });
    }

    function submitNote(event){

        event.preventDefault();
        props.onAdd(note);
        setNote({
          title:"",
          content:""
      })
    }

  return (
    <div>
      <form className="create-note">

        {isExpanded?
        <input value={note.title} 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" />: null}

        <textarea 
        onClick = {expand}
        value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." 
        rows={isExpanded? 3:1} />
        <Zoom in={true}><Fab onClick={submitNote}> <AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;