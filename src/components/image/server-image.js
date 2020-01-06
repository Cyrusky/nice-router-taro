import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import classNames from 'classnames'
import ImageTools from '@/components/image/image-tools'

class ServerImage extends Taro.PureComponent {
  static externalClasses = ['my-class']

  render() {
    const { mode = 'scaleToFill', className, src, uri, size, customStyle = {} } = this.props
    const rootCls = classNames('my-class', className)
    console.log('src || uri', src || uri)
    const remotePath = ImageTools.getServerImagUrl(src || uri, size)
    console.log('remote src || uri', src || uri)
    return <Image className={rootCls} src={remotePath} mode={mode} style={customStyle} />
  }
}

export default ServerImage
