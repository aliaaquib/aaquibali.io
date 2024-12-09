/**
 * @type {import('./types').Project[]}
 */
const favourites = [
    {
        title: 'Sit.',
        heroURL: './hero-sit.png',
        demoURL: 'https://sit.sonnet.io',
        isFavourite: true,
        date: '2022-12-25',
        content: `
Sit down and do *nothing*.

We spend so much time building things that steal attention &amp; extract value from users. [Sit.](https://sit.sonnet.io) does the opposite: it gives you back your time. 

Please share with a friend who needs to sit the fuck down or enjoy the experience yourself. 
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
