require(['xooie/helpers'], function(helpers){
  describe('Xooie Helper Methods', function(){
    describe('toAry', function(){
      it('converts a string into an array', function(){
        expect(helpers.toAry('foo')).toEqual(['foo']);
      });

      it('splits the string on space', function(){
        expect(helpers.toAry('foo bar')).toEqual(['foo', 'bar']);
      });

      it('returns the same array', function(){
        expect(helpers.toAry(['foo', 'bar'])).toEqual(['foo', 'bar']);
      });

      it('returns undefined for an object', function(){
        expect(helpers.toAry({foo: 'bar'})).toBeUndefined();
      });
    });
  });
});