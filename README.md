# Repro for ts-prune#151

See <https://github.com/nadeesha/ts-prune/issues/151>.

To repro:

    $ yarn
    $ yarn ts-prune
    server/constants.ts:1 - A
    server/constants.ts:2 - B
    ✨  Done in 1.25s.

    $ yarn add -D ts-prune@0.9.1
    $ yarn ts-prune
    ✨  Done in 1.34s.
