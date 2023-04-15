import { Component, onMount } from 'solid-js';

const Background: Component = () => {
  let backgroundContainer: HTMLDivElement;

  onMount(() => {
    setTimeout(() => (backgroundContainer.dataset.loaded = 'true'), 500);

    const blink = () => {
      backgroundContainer.dataset.blink = 'true';
      setTimeout(() => {
        delete backgroundContainer.dataset.blink;
        setTimeout(blink, Math.random() * 10000);
      }, 200);
    };
    blink();
  });

  return (
    <div
      class="group grid h-screen w-screen place-items-center bg-gradient-radial from-transparent to-stone-900"
      ref={backgroundContainer!}
    >
      <div class="bg-gradient-radial from-stone-900 to-transparent p-24">
        <div class="mb-0 delay-1000 duration-1000 group-data-[loaded]:mb-12">
          <div class="relative select-none text-8xl font-bold opacity-0 transition-opacity duration-1000 group-data-[loaded]:opacity-100">
            <span class="bg-gradient-to-bl from-pink-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent opacity-0 blur-md transition-opacity delay-500 duration-1000 group-data-[blink]:opacity-0 group-data-[loaded]:opacity-100 group-data-[blink]:delay-0">
              matvey.gg
            </span>
            <span class="absolute left-0 text-white opacity-80">
              matvey
              <span class="text-stroke-white text-stone-900">.gg</span>
            </span>
          </div>
        </div>
        <div class="absolute inset-x-0 flex justify-center gap-32">
          <div class="opacity-0 transition-opacity delay-[2s] duration-1000 group-data-[loaded]:opacity-100">
            <a
              href="https://twitter.com/matveydotgg"
              class="relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-bl before:from-pink-600 before:via-fuchsia-500 before:to-indigo-600 before:opacity-0 before:blur before:transition-opacity hover:before:opacity-100"
            >
              <svg
                class="block h-8 w-8 transition-transform hover:-rotate-12 hover:scale-125"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="opacity-0 transition-opacity delay-[2.5s] duration-1000 group-data-[loaded]:opacity-100">
            <a
              href="https://github.com/ronanru"
              class="relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-bl before:from-pink-600 before:via-fuchsia-500 before:to-indigo-600 before:opacity-0 before:blur before:transition-opacity hover:before:opacity-100"
            >
              <svg
                class="block h-8 w-8 transition-transform hover:-rotate-12 hover:scale-125"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="opacity-0 transition-opacity delay-[3s] duration-1000 group-data-[loaded]:opacity-100">
            <a
              href="https://t.me/matveydotgg"
              class="relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-bl before:from-pink-600 before:via-fuchsia-500 before:to-indigo-600 before:opacity-0 before:blur before:transition-opacity hover:before:opacity-100"
            >
              <svg
                class="block h-8 w-8 transition-transform hover:-rotate-12 hover:scale-125"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
