export const Skill=({color,children,...props})=>{
    return (
        <div {...props} style={{backgroundColor:color}}>{children}</div>
    )
}