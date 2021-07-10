/* Generated by Opal 1.2.0.dev */
Opal.modules["stringio"] = function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.$$$, $$ = Opal.$$, $klass = Opal.klass, $truthy = Opal.truthy, $gvars = Opal.gvars;

  Opal.add_stubs(['$include', '$new', '$call', '$close', '$attr_accessor', '$length', '$include?', '$!', '$check_readable', '$==', '$===', '$>=', '$raise', '$>', '$+', '$-', '$seek', '$enum_for', '$eof?', '$ord', '$[]', '$to_str', '$chomp', '$check_writable', '$String', '$write', '$closed_write?', '$closed_read?']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'StringIO');

    var $nesting = [self].concat($parent_nesting), $StringIO_open$1, $StringIO_initialize$2, $StringIO_eof$ques$3, $StringIO_seek$4, $StringIO_tell$5, $StringIO_rewind$6, $StringIO_each_byte$7, $StringIO_each_char$8, $StringIO_each$9, $StringIO_write$10, $StringIO_read$11, $StringIO_close$12, $StringIO_close_read$13, $StringIO_close_write$14, $StringIO_closed$ques$15, $StringIO_closed_read$ques$16, $StringIO_closed_write$ques$17, $StringIO_check_writable$18, $StringIO_check_readable$19;

    self.$$prototype.position = self.$$prototype.string = self.$$prototype.closed = nil;
    
    self.$include($$$($$($nesting, 'IO'), 'Readable'));
    self.$include($$$($$($nesting, 'IO'), 'Writable'));
    Opal.defs(self, '$open', $StringIO_open$1 = function $$open(string, mode) {
      var $iter = $StringIO_open$1.$$p, block = $iter || nil, self = this, io = nil, res = nil;

      if ($iter) $StringIO_open$1.$$p = null;
      
      
      if ($iter) $StringIO_open$1.$$p = null;;
      
      if (string == null) {
        string = "";
      };
      
      if (mode == null) {
        mode = nil;
      };
      io = self.$new(string, mode);
      res = block.$call(io);
      io.$close();
      return res;
    }, $StringIO_open$1.$$arity = -1);
    self.$attr_accessor("string");
    
    Opal.def(self, '$initialize', $StringIO_initialize$2 = function $$initialize(string, mode) {
      var self = this, $ret_or_1 = nil, $ret_or_2 = nil;

      
      
      if (string == null) {
        string = "";
      };
      
      if (mode == null) {
        mode = "rw";
      };
      self.string = string;
      self.position = string.$length();
      if ($truthy((function() {if ($truthy(($ret_or_1 = mode['$include?']("r")))) {
        return mode['$include?']("w")['$!']()
      } else {
        return $ret_or_1
      }; return nil; })())) {
        return (self.closed = "write")
      } else if ($truthy((function() {if ($truthy(($ret_or_2 = mode['$include?']("w")))) {
        return mode['$include?']("r")['$!']()
      } else {
        return $ret_or_2
      }; return nil; })())) {
        return (self.closed = "read")
      } else {
        return nil
      };
    }, $StringIO_initialize$2.$$arity = -1);
    
    Opal.def(self, '$eof?', $StringIO_eof$ques$3 = function() {
      var self = this;

      
      self.$check_readable();
      return self.position['$=='](self.string.$length());
    }, $StringIO_eof$ques$3.$$arity = 0);
    Opal.alias(self, "eof", "eof?");
    
    Opal.def(self, '$seek', $StringIO_seek$4 = function $$seek(pos, whence) {
      var self = this, $case = nil;

      
      
      if (whence == null) {
        whence = $$$($$($nesting, 'IO'), 'SEEK_SET');
      };
      $case = whence;
      if ($$$($$($nesting, 'IO'), 'SEEK_SET')['$===']($case)) {
      if ($truthy($rb_ge(pos, 0))) {
      } else {
        self.$raise($$$($$($nesting, 'Errno'), 'EINVAL'))
      };
      self.position = pos;}
      else if ($$$($$($nesting, 'IO'), 'SEEK_CUR')['$===']($case)) {if ($truthy($rb_gt($rb_plus(self.position, pos), self.string.$length()))) {
        self.position = self.string.$length()
      } else {
        self.position = $rb_plus(self.position, pos)
      }}
      else if ($$$($$($nesting, 'IO'), 'SEEK_END')['$===']($case)) {if ($truthy($rb_gt(pos, self.string.$length()))) {
        self.position = 0
      } else {
        self.position = $rb_minus(self.position, pos)
      }};
      return 0;
    }, $StringIO_seek$4.$$arity = -2);
    
    Opal.def(self, '$tell', $StringIO_tell$5 = function $$tell() {
      var self = this;

      return self.position
    }, $StringIO_tell$5.$$arity = 0);
    Opal.alias(self, "pos", "tell");
    Opal.alias(self, "pos=", "seek");
    
    Opal.def(self, '$rewind', $StringIO_rewind$6 = function $$rewind() {
      var self = this;

      return self.$seek(0)
    }, $StringIO_rewind$6.$$arity = 0);
    
    Opal.def(self, '$each_byte', $StringIO_each_byte$7 = function $$each_byte() {
      var $iter = $StringIO_each_byte$7.$$p, block = $iter || nil, $a, self = this, i = nil;

      if ($iter) $StringIO_each_byte$7.$$p = null;
      
      
      if ($iter) $StringIO_each_byte$7.$$p = null;;
      if ($truthy(block)) {
      } else {
        return self.$enum_for("each_byte")
      };
      self.$check_readable();
      i = self.position;
      while (!($truthy(self['$eof?']()))) {
        
        block.$call(self.string['$[]'](i).$ord());
        i = $rb_plus(i, 1);
      };
      return self;
    }, $StringIO_each_byte$7.$$arity = 0);
    
    Opal.def(self, '$each_char', $StringIO_each_char$8 = function $$each_char() {
      var $iter = $StringIO_each_char$8.$$p, block = $iter || nil, $a, self = this, i = nil;

      if ($iter) $StringIO_each_char$8.$$p = null;
      
      
      if ($iter) $StringIO_each_char$8.$$p = null;;
      if ($truthy(block)) {
      } else {
        return self.$enum_for("each_char")
      };
      self.$check_readable();
      i = self.position;
      while (!($truthy(self['$eof?']()))) {
        
        block.$call(self.string['$[]'](i));
        i = $rb_plus(i, 1);
      };
      return self;
    }, $StringIO_each_char$8.$$arity = 0);
    
    Opal.def(self, '$each', $StringIO_each$9 = function $$each(separator) {
      var $iter = $StringIO_each$9.$$p, $yield = $iter || nil, self = this, chomp_lines = nil;
      if ($gvars["/"] == null) $gvars["/"] = nil;

      if ($iter) $StringIO_each$9.$$p = null;
      
      
      if (separator == null) {
        separator = $gvars["/"];
      };
      if (($yield !== nil)) {
      } else {
        return self.$enum_for("each_line")
      };
      self.$check_readable();
      chomp_lines = false;
      if ($truthy($$$('::', 'Hash')['$==='](separator))) {
        separator = (function() {if ($truthy((chomp_lines = separator['$[]']("chomp")))) {
          return /\r?\n/
        } else {
          return $gvars["/"]
        }; return nil; })()
      } else if ($truthy(separator)) {
        separator = separator.$to_str()
      } else {
        separator = undefined
      };
      
      var str = self.string, stringLength = str.length;
      if (self.position < stringLength) str = str.substr(self.position);
      if (separator) {
        var chomped = (str).$chomp(), trailing = str.length !== chomped.length, splitted = chomped.split(separator);
        for (var i = 0, len = splitted.length; i < len; i++) {
          var line = chomp_lines ? splitted[i] : (i < len - 1 || trailing ? splitted[i] + separator : splitted[i]);
          Opal.yield1($yield, line);
        }
      } else if (separator === undefined) {
        Opal.yield1($yield, str);
      } else {
        var m, re = /(.+(?:\n\n|$))\n*/g;
        while ((m = re.exec(str))) Opal.yield1($yield, m[1]);
      }
      self.position = stringLength;
    ;
      return self;
    }, $StringIO_each$9.$$arity = -1);
    Opal.alias(self, "each_line", "each");
    
    Opal.def(self, '$write', $StringIO_write$10 = function $$write(string) {
      var self = this, before = nil, after = nil;

      
      self.$check_writable();
      string = self.$String(string);
      if (self.string.$length()['$=='](self.position)) {
        
        self.string = $rb_plus(self.string, string);
        return (self.position = $rb_plus(self.position, string.$length()));
      } else {
        
        before = self.string['$[]'](Opal.Range.$new(0, $rb_minus(self.position, 1), false));
        after = self.string['$[]'](Opal.Range.$new($rb_plus(self.position, string.$length()), -1, false));
        self.string = $rb_plus($rb_plus(before, string), after);
        return (self.position = $rb_plus(self.position, string.$length()));
      };
    }, $StringIO_write$10.$$arity = 1);
    
    Opal.def(self, '$read', $StringIO_read$11 = function $$read(length, outbuf) {
      var self = this, string = nil, str = nil;

      
      
      if (length == null) {
        length = nil;
      };
      
      if (outbuf == null) {
        outbuf = nil;
      };
      self.$check_readable();
      if ($truthy(self['$eof?']())) {
        return nil};
      string = (function() {if ($truthy(length)) {
        
        str = self.string['$[]'](self.position, length);
        self.position = $rb_plus(self.position, length);
        return str;
      } else {
        
        str = self.string['$[]'](Opal.Range.$new(self.position, -1, false));
        self.position = self.string.$length();
        return str;
      }; return nil; })();
      if ($truthy(outbuf)) {
        return outbuf.$write(string)
      } else {
        return string
      };
    }, $StringIO_read$11.$$arity = -1);
    
    Opal.def(self, '$close', $StringIO_close$12 = function $$close() {
      var self = this;

      return (self.closed = "both")
    }, $StringIO_close$12.$$arity = 0);
    
    Opal.def(self, '$close_read', $StringIO_close_read$13 = function $$close_read() {
      var self = this;

      if (self.closed['$==']("write")) {
        return (self.closed = "both")
      } else {
        return (self.closed = "read")
      }
    }, $StringIO_close_read$13.$$arity = 0);
    
    Opal.def(self, '$close_write', $StringIO_close_write$14 = function $$close_write() {
      var self = this;

      if (self.closed['$==']("read")) {
        return (self.closed = "both")
      } else {
        return (self.closed = "write")
      }
    }, $StringIO_close_write$14.$$arity = 0);
    
    Opal.def(self, '$closed?', $StringIO_closed$ques$15 = function() {
      var self = this;

      return self.closed['$==']("both")
    }, $StringIO_closed$ques$15.$$arity = 0);
    
    Opal.def(self, '$closed_read?', $StringIO_closed_read$ques$16 = function() {
      var self = this, $ret_or_3 = nil;

      if ($truthy(($ret_or_3 = self.closed['$==']("read")))) {
        return $ret_or_3
      } else {
        return self.closed['$==']("both")
      }
    }, $StringIO_closed_read$ques$16.$$arity = 0);
    
    Opal.def(self, '$closed_write?', $StringIO_closed_write$ques$17 = function() {
      var self = this, $ret_or_4 = nil;

      if ($truthy(($ret_or_4 = self.closed['$==']("write")))) {
        return $ret_or_4
      } else {
        return self.closed['$==']("both")
      }
    }, $StringIO_closed_write$ques$17.$$arity = 0);
    
    Opal.def(self, '$check_writable', $StringIO_check_writable$18 = function $$check_writable() {
      var self = this;

      if ($truthy(self['$closed_write?']())) {
        return self.$raise($$($nesting, 'IOError'), "not opened for writing")
      } else {
        return nil
      }
    }, $StringIO_check_writable$18.$$arity = 0);
    return (Opal.def(self, '$check_readable', $StringIO_check_readable$19 = function $$check_readable() {
      var self = this;

      if ($truthy(self['$closed_read?']())) {
        return self.$raise($$($nesting, 'IOError'), "not opened for reading")
      } else {
        return nil
      }
    }, $StringIO_check_readable$19.$$arity = 0), nil) && 'check_readable';
  })($nesting[0], $$($nesting, 'IO'), $nesting)
};
