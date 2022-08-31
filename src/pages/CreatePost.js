import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth} from "../firebase_config";
import {  useNavigate } from "react-router-dom";





function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();


    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid},
        });
        navigate("/");
    };
//si la personne est loggé alors l aura accés aux post sinon il redirigé a la page de connexion
    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);



    return (
        <div className="createPostPage">
        <div className="cpContainer">
            <h1>Create A Post</h1>
            <div className="inputGp"> 
                <label> Title :</label>
                <input  placeholder="Title..."
                onChange={(event) => {
                    setTitle(event.target.value);
                    }}
                    />
            </div>

            <div className="inputGp">
                <label> Post :</label>
                <textarea placeholder="Post..." 
                    onChange={(event) => {
                        setPostText(event.target.value);
                    }}
                    />
            </div>
            <button onClick={createPost}>Send Post</button>
        </div>
    </div>
    );
}

export default CreatePost;