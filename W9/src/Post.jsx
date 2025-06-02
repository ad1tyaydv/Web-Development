const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

export function PostComponent({name, subtitle, time, image, description}) {
  return <div style={style}>
    <div style={{display: "flex"}}>
    <img src={image}
    style={{
      width: 40,
      height: 40,
      borderRadius: 20
    }}/>
    
    <div style={{fontSize: 10, marginLeft: 10}}>
      <b>
        {name}
      </b>
      <div>{subtitle}</div>
      {time !== undefined ? <div style={{display: 'flex'}}>
        <div>{time}</div>
        <img src={"data:image/png;base64,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"}
        style={{with: 12, height: 12}} />
      </div> : null}
    </div>
  </div>
  <div style={{fontSize: 12}}>
        {description}
      </div>
  </div>
}