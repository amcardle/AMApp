<template>
    <div id="app">
        <header>
            <h1>AMApp</h1>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <a href="https://github.com/amcardle/AMApp">GitHub</a>
            </nav>
        </header>
        <router-view />
    </div>
</template>