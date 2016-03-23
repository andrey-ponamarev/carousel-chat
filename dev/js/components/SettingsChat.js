import React from 'react';

const UserSettings = ({user, size, changeName})=> {
    let userName = user;

    const submitName = e => {
        e.preventDefault();
        if (!userName.value.trim()) {
            return
        }
        changeName(userName.value);
    };

    return <form onSubmit={submitName}>
        <label>User Name </label>
        <input ref={node => { userName = node }}
               type="text"
               defaultValue={userName}/>
        <button type="submit">Change Name</button>
    </form>
};

export default UserSettings;