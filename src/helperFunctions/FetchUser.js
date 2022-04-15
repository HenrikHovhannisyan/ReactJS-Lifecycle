import React from "react";

export const FetchUser =  async (id) => {
    const response = await fetch(`https://api.github.com/user/${id}`)
    const data = await response.json()
    return data
}
