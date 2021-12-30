import React, {useState} from 'react';


const Postform = () => {

    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChange = (e) => {
        console.log("e",e.target.name)
        if(e.target.name==="title") {
        setTitle(e.target.value);
        }
        else {
        setBody(e.target.value);
        }
    }
    const onSubmit =(e) => {
        e.preventDefault();
        const requestBody = {
            "title":title,
            "body":body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'post',
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(requestBody)
        }).then(res => res.json())
        .then(data => console.log("dtaa",data))
    }


    return (
        <form onSubmit={onSubmit}>
        <div className="center">
            <div>
                <label>Title</label><br/>
                <input name="title" value={title} onChange={onChange}/>
            </div>
            <div>
                <label>Body</label><br/>
                <input name = "body" value={body} onChange={onChange}/>
            </div>
            <button>Submit</button>
        </div>
        </form>
        // <h2>form</h2>
    )
}

export default Postform;