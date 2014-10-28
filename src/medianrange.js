
module.exports = function( median, size, lowerbounds, upperbounds ) {
  var range = [ median ]
  var inc = 1

  lowerbounds = (typeof lowerbounds === 'number') ? lowerbounds : -Infinity
  upperbounds = (typeof upperbounds === 'number') ? upperbounds : Infinity

  if( typeof median !== 'number' || median === Infinity )
    throw new TypeError( 'first argument(median) must be a finite number' )

  if( lowerbounds >= upperbounds )
    throw new RangeError( 'lowerbounds cannto be equal to or higher than upperbounds' )

  if( lowerbounds > median )
    throw new RangeError( 'lowerbounds cannto be lower than the desired median' )

  if( upperbounds < median )
    throw new RangeError( 'upperbounds cannto be higher than the desired median' )


  while( range.length <= size ) {
    var next = median + inc
    var prev = median - inc
    var done = false

    inc++

    if( next > upperbounds && prev < lowerbounds )
      done = true

    if( !done && next <= upperbounds ) {
      range.push( next )
      done = range.length === size
    }

    if( !done && prev >= lowerbounds ) {
      range.unshift( prev )
      done = range.length === size
    }

    if( done )
      break
  }

  return range
}
