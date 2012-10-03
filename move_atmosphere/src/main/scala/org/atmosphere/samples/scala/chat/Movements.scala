/*
 * Copyright 2012 Jeanfrancois Arcand
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package org.atmosphere.samples.scala.chat

import java.util.Date
import javax.xml.bind.annotation.XmlRootElement
import reflect.{BeanProperty, BeanInfo}

@BeanInfo
@XmlRootElement
class Movements {
  @BeanProperty
  var name: String = null
  @BeanProperty
  var x:Int = 0;
  @BeanProperty
  var y:Int = 0;
  @BeanProperty
  var z:Int = 0;

  def this(name: String) {
    this ()
    this.author = author
    this.text = text
    this.time = new Date().getTime
  }

  def cords(x:Int,y:Int,z:Int):Unit {
    this.x=x;this.y=y;this.z=z;
  }

}
