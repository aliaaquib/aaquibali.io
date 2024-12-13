/**
 * @type {import('./types').Project[]}
 */
const favourites = [
    {
        title: 'Relax.',
        heroURL: './hero-relax.png',
        demoURL: 'https://relaxnow.vercel.app',
        isFavourite: true,
        date: '2022-12-25',
        content: `
Relax, sit, and feel *better*.

We spend so much time creating things that take your attention and drain your energy. 

[Relax.](https://relaxnow.vercel.app) is different — it’s designed to give you back your time and help you unwind. Take a break, clear your mind, and enjoy the moment.

Please share it with someone who needs to slow down or experience it for yourself. You deserve it.
        `,
    },

    {
        title: 'Days.',
        heroURL: './hero-days.png',
        demoURL: 'https://relaxnow.vercel.app',
        isFavourite: true,
        date: '2022-12-25',
        content: `
Relax, sit, and feel *better*.

We spend so much time creating things that take your attention and drain your energy. 

[Relax.](https://relaxnow.vercel.app) is different — it’s designed to give you back your time and help you unwind. Take a break, clear your mind, and enjoy the moment.

Please share it with someone who needs to slow down or experience it for yourself. You deserve it.
        `,
    }
]

/**
 * @type {import('./types').RemainingProject[]}
 */
const remainingProjects = [
    {
        title: 'Days',
        date: '2023-07-03',
        demoURL: 'https://days.sonnet.io',
        content: `
        My life in days, inspired by Buster Benson's [Life in Weeks](https://busterbenson.com/life-in-weeks).

        Feel free to fork it, but please be gentle, it's still the first iteration.
        `,
        links: [{ type: 'source', url: 'https://github.com/paprikka/days' }],
    }
]


const formatted = (str) =>
    str
        .split('\n')
        .map((line) => line.trim())
        .join('\n')
        .trim()

const formatProject = (project) => ({
    ...project,
    content: formatted(project.content),
    date: Array.isArray(project.date)
        ? project.date.map((d) => new Date(d))
        : new Date(project.date),
})

module.exports = {
    foo: 'bar',
    favourites: favourites.map(formatProject),
    remaining: [
        ...remainingProjects.sort((a, b) => {
            const dateA = new Date(Array.isArray(a.date) ? a.date[0] : a.date)
            const dateB = new Date(Array.isArray(b.date) ? b.date[0] : b.date)

            return dateB - dateA
        }),
    ].map(formatProject),
}
