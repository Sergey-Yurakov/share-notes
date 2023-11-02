export const Footer = () => {
    return (
        <footer className="page-footer font-small navbar-dark bg-dark ">
            <div className="container navbar-nav">
                <div className="footer-copyright text-center py-3">
                    <a className="nav-link" href="https://mdbootstrap.com/">
                        {new Date().getFullYear()} <strong>ShareNotes</strong>
                    </a>
                </div>
            </div>
        </footer>
    );
};
