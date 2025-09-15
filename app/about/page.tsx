import { cn } from "@/lib/utils"

export default function About() {
  return (
    <main className={cn(
        "max-w-[350px] sm:max-w-[850px] m-auto sm:m-0 rounded-base shadow-shadow border-2 border-border bg-main",
    )}>
        <h3 className="text-2xl font-bold p-4">About</h3>
        <h5 className="text-mtext pl-4">Background</h5>
        <p className="text-mtext px-4 pt-1">
            This is a blog dedicated to sharing recipes from my family.
            The name &quot;Cindy&apos;s Cookbook&quot; is in honor of my late mother, Cindy, who loved to cook. 
            All the recipes listed on this blog come from hand-written or printed recipes that my mother kept in her kitchen.
            Some recipes were originally from my late grandmother, Sue, as well.
            You can find the source of each recipe at the bottom of its respective page.
            Note that when translating some of the recipes to a digital form, I&apos;ve had to fill in some blanks myself, as some recipes were either incomplete or the writing was faded.
            Therefore, some measurements may be off, but I&apos;ve done my best to preserve each recipe as accurately as possible.
        </p>
        <br></br>
        <h5 className="text-mtext pl-4">Navigation</h5>
        <p className="text-mtext px-4 pt-1 pb-4">
            The homepage contains cards for each recipe on the blog.
            Each card will provide some basic information including recipe name, prep time, cook time, servings, and type of dish.
            Click on a card to take you to its respective recipe page, where you will receive the full ingredients list and instructions.
            Click on the back button or on the blog title in the top-left corner to return to the homepage.
            Click on the Prev and Next buttons at the bottom to navigate between different pages of recipes.
            You can also use the searchbar located on the homepage in order to filter recipes by name, type (sweet or savory), or source (mom or grandma).
        </p>
        <br></br>
        <p className="text-mtext px-4 pt-1 pb-4">
            I hope you enjoy exploring this little family tribute of mine. :)
        </p>
        <br></br>
        <p className="text-mtext px-4 pt-1 pb-4">
            km, 2025
        </p>
    </main>
  );
}