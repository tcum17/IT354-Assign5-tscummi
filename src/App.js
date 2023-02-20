import React from "react";
import { useState } from "react";
import BlogForm from "./components/BlogForm";
import RemovePost from "./components/RemovePost";
import posts from "./components/Posts";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
const axios = require("axios").default;

export default function App() {
    const [users, setUsers] = useState(posts);

    function getPosts() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                console.log("GET Success!");
                console.log(response);
                const shortdArray = response.data.slice(0, 3);
                setUsers(shortdArray);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    //submits posts
    const submitPost = (user) => {
        const num = Math.floor(Math.random() * 10000) + 1;
        const newUser = { num, ...user };

        console.log(user);
        console.log(user["user"]);
        console.log(user["title"]);
        console.log(user["post"]);

        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                user: user["user"],
                title: user["title"],
                post: user["post"],
            })
            .then((response) => {
                console.log("POST Success!");
                console.log(response);
                setUsers([...users, newUser]);
            });
    };

    const deletePost = (num) => {
        axios
            .delete(`${"https://jsonplaceholder.typicode.com/posts"}/1`)
            .then(() => {
                console.log("DELETE Success!");
                setUsers(users.filter((user) => user.id !== num));
            });
    };

    return (
        <div class="container">
            <div class="row">
                <BlogForm onAdd={submitPost} />
                <div class="col-md-6">
                    <button class="btn btn-success mb-4" onClick={getPosts}>
                        GET Request
                    </button>
                </div>

                {users.length > 0 ? (
                    <RemovePost users={users} onDelete={deletePost} />
                ) : (
                    "There are currently no posts"
                )}
            </div>
        </div>
    );
}
