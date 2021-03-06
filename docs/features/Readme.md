# Feature overview 
 
`switchit` is more than a wrapper for your command.  
This document contains a list of all the features it provides.

- [Base architecture](Architecture.md#base-architecture)
    - [Object oriented command definition](Architecture.md#object-oriented-command-definition)
    - [Promise-based command dispatching](Architecture.md#promise-based-command-dispatching)
- [Switches and command line arguments](Switches-and-arguments.md#switches-and-command-line-arguments)
    - [Positional argument processing](Switches-and-arguments.md#positional-argument-processing)
    - [Command line switch processing](Switches-and-arguments.md#command-line-switch-processing)
    - [Required and optional parameters](Switches-and-arguments.md#required-and-optional-values)
    - [Variadic switches and parameters](Switches-and-arguments.md#variadic-switches-and-parameters)
    - [Switchy parameters](Switches-and-arguments.md#switchy-parameters)
    - [`--no` prefix for switches](Switches-and-arguments.md#--no-prefix-processing)
    - [Shortest unique prefix matching](Switches-and-arguments.md#shortest-unique-prefix)
    - [Custom single-character alias](Switches-and-arguments.md#custom-single-character-alias)
    - [Shorthand syntax](Switches-and-arguments.md#shorthand-syntax)
        - [Minimal](Switches-and-arguments.md#minimal)
        - [With specific type](Switches-and-arguments.md#with-specific-type)
        - [Optional](Switches-and-arguments.md#optional)
        - [Variadic](Switches-and-arguments.md#variadic)
        - [Switchy](Switches-and-arguments.md#switchy)
        - [Custom character alias](Switches-and-arguments.md#custom-character-alias)
        - [Confirmable](Switches-and-arguments.md#confirmable)
    - [Private switches](Switches-and-arguments.md#private-switches)
- [Type system](Types.md#type-system)
    - [Built-in types](Types.md#built-in-types)
    - [Custom type definition](Types.md#custom-type-definition)
- [Interactive mode](Interactive.md#interactive-mode)
    - [Configuring interactive mode](Interactive.md#configuring-interactive-mode)
    - [Deactivating interactive mode](Interactive.md#deactivating-interactive-mode)
    - [Confirmable switches and parameters](Interactive.md#confirmable-switches-and-parameters)
- [Commands and sub-commands](Commands-and-subcommands.md#commands-and-sub-commands)
    - [Command containers](Commands-and-subcommands.md#command-containers)
    - [Shortest unique prefix](Commands-and-subcommands.md#shortest-unique-prefix)
    - [Sub-command aliases](Commands-and-subcommands.md#sub-command-aliases)
    - [Default sub-command](Commands-and-subcommands.md#default-sub-command)
    - [Command chaining](Commands-and-subcommands.md#command-chaining)
    - [Private commands](Commands-and-subcommands.md#private-commands)
- [Built-in commands](Built-in-commands.md)
    - [Help command](Built-in-commands.md#help-command)
        - [Including the help command](Built-in-commands.md#including-the-help-command)
    - [Version command](Built-in-commands.md#version-command)
        - [Including the version command](Built-in-commands.md#including-the-version-command)
- [Response file processing](Response-file-processing.md#response-file-processing)
    - [Complex command processing](Response-file-processing.md#complex-command-processing)
    - [Nested file processing](Response-file-processing.md#nested-file-processing)
    - [Escaping the `@` symbol](Response-file-processing.md#escaping-the--symbol)
- [Miscelaneous, other](Miscelaneous.md)
    - [Program logo](Miscelaneous.md#program-logo)