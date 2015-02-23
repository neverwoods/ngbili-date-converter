# bili-date-converter
Date conversion directive for AngularJS. Use this directive to dynamically
convert date values between model and view.

## Use case

Say you have a date input field where you want the user to input a date
using the format `dd-MM-yyyy`. But at the same time, your back-end system
requires an input date with the format `yyyy-MM-dd`.

You could go ahead and force the user to input `yyyy-MM-dd` but that would be
an unwanted situation if the user is used to the `dd-MM-yyyy` format in their
country.

Using this directive, you can allow the user to enter the `dd-MM-yyyy` format
and automatically have it converted to `yyyy-MM-dd` or any other format for that
matter.

## Example usage

```html
<label for="dateField">Please enter 'the date'</label>
<input
        class="form-control"
        name="dateField"
        id="dateField"
        type="text"
        required
        placeholder="dd-mm-yyyy"
        bili-date-converter="dd-MM-yyyy to yyyy-MM-dd"
        ng-pattern="/\d{4}-\d{2}-\d{2}/"
        ng-model="model.date">
```

The `bili-date-converter` directive takes a single argument in
the following format:

```js
    bili-date-converter="viewFormat to modelFormat"
```

Note that validation rules such as `ng-pattern` validate against
the `modelFormat`. Therefore, the example above has the pattern

```js
    ng-pattern="/\d{4}-\d{2}-\d{2}/"
```

instead of

```js
    ng-pattern="/\d{2}-\d{2}-\d{4}/"
```

as you might expect.

## Format usage
You can convert from and to any format defined by the [format elements of the Angular date filter](https://docs.angularjs.org/api/ng/filter/date)

# Happy coding

- Robin van Baalen
