import React from "react";

type OscarProp = {
    children: React.ReactNode
}

const Oscar = (props: OscarProp) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Oscar;