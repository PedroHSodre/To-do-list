function theme () {
    const changeTheme = document.querySelector('.change-theme');
    const changeThemeSun = document.querySelector('.change-theme-sun');
    const changeThemeMoon = document.querySelector('.change-theme-moon');

    const themeMoon = document.querySelector('.dark');
    const themeSun = document.querySelector('.light');
    const themeMoonDesktop = document.querySelector('.dark-desktop');
    const themeSunDesktop = document.querySelector('.light-desktop');
    const changeThemeDisable = document.querySelector('.disable');

    const createdTasks = document.querySelector('.created-tasks');    
    const body = document.getElementById('body');

    changeTheme.addEventListener('click', () => {
        console.log('clique');
    });
    
    changeThemeMoon.addEventListener('click', () => {
        changeThemeMoon.classList.add('disable');
        changeThemeSun.classList.remove('disable');
        themeMoon.classList.add('disable');
        themeSun.classList.remove('disable');
        themeMoonDesktop.classList.add('disable');
        themeSunDesktop.classList.remove('disable');
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        createdTasks.classList.remove('dark-theme-li');
        createdTasks.classList.add('light-theme-li');
    });
    
    changeThemeSun.addEventListener('click', () => {
        changeThemeSun.classList.add('disable');
        changeThemeMoon.classList.remove('disable');
        themeMoon.classList.remove('disable');
        themeSun.classList.add('disable');
        themeMoonDesktop.classList.remove('disable');
        themeSunDesktop.classList.add('disable');
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        createdTasks.classList.add('dark-theme-li');
        createdTasks.classList.remove('light-theme-li');
    });
}
theme();
