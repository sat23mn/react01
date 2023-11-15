import './app-info.css';


const AppInfo = ({ increased, employees }) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company </h1>
            <h2>Total number if employees:{employees} </h2>
            <h2>Will receive a bonus: {increased}</h2>
        </div>
    );
}

export default AppInfo;