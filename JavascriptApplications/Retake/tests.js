import { StringBuilder } from './stringbuilder';
import { describe } from 'mocha';
import { assert } from 'assert';
import { expect } from 'chai';

describe('StringBuilder unit tests', function () {
    let builder;
    beforeEach(function () {
        builder = new StringBuilder();
    });

    describe('test initial state', function () {
        it('has all props', function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true);
        });

        it('should init with string only', function () {
            expect(new StringBuilder(5)).to.throw();
            expect(new StringBuilder([1, 2, 3])).to.throw();
            expect(new StringBuilder(undefined).toString()).to.equal('');
        });

        it('should throw error with non-string arguments', function () {
            expect(builder.append(5)).to.throw();
            expect(builder.insertAt(undefined, 0)).to.throw();
            expect(builder.prepend([1, 2, 3])).to.throw();
        });

        it('empty constructor inits builder', function () {
            expect(builder.to.not.be.undefined);
            expect(builder.toString()).to.equal('');
        });

        it('should append with non-empty constructor', function () {
            let sb = new StringBuilder('test');
            expect(sb.toString()).to.equal('test');
        });

        it('append should append string at the end', function () {
            let sb = new StringBuilder('before');
            sb.append('after');
            expect(sb.toString()).to.equal('beforeafter');
        });

        it('prepend should append string at the beginning', function () {
            builder.append('before');
            builder.prepend('after');
            expect(builder.toString()).to.equal('afterbefore');
        });

        it('insertAt should insert at correct place', function () {
            builder.append('hello');
            builder.insertAt(' stranger', 5);
            expect(builder.toString()).to.equal('hello stanger');
        });

        it('should remove correct substring', function () {
            builder.append('remove me');
            builder.remove(0, 7);
            expect(builder.toString()).to.equal('me');
        });

        it('toString shoud return string with all appended elements', function() {
            builder.append('first ');
            builder.append('second');
            let result = builder.toString();
            expect(result).to.equal('first second');
        });
    });
});