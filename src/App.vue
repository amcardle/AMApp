<template>
    <div id="app">
        <header>
            <h1 style="display: inline;">AMApp</h1>

            <a href="https://amapp-git-beta.andrewmcardle1.now.sh/">β</a>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <a href="https://github.com/amcardle/AMApp">GitHub</a>
            </nav>
        </header>
        <router-view />
    </div>
</template>