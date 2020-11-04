const DisplayTask = (props) => {
    const {task, idx, handleCheckBox, handleDelete} = props;
    
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title" style={task.isCompleted ? {textDecoration:"line-through"} : {}}>{task.title}</h2>
                <div className="form-group">
                    <input type="checkbox" name="" className="form-control" checked={task.isCompleted} onChange={(e) => handleCheckBox(e, idx)} />
                </div>
                {
                    task.isCompleted ? <button className="btn btn-danger" onClick={(e)=>handleDelete(e, idx)}>Delete</button> : null
                }
            </div>
        </div>
    );
}

export default DisplayTask;