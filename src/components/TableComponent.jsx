import React from "react";

function TableComponents({ title, content, color }) {
    var colorDark = `var(--${color}Dark)`


    return (
        <div className="table">
            <h3>{title}</h3>
            {content.map((c, index) => (
                <div className="element" style={{ borderColor: colorDark}}>
                    <h4 dangerouslySetInnerHTML={{ __html: c.label }} key={index}></h4>
                    <h4 dangerouslySetInnerHTML={{ __html: c.info }} key={index}></h4>
                </div>
            ))}
        </div>
    )

}

export default TableComponents