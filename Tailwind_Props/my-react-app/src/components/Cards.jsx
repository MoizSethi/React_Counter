import React from 'react';

function Cards({ username, age }) {
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO1ABhTbJ30hyaTS5yGuX0cFk_PN51aKV9g&s" alt="" width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {username}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {age}
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}

export default Cards;
