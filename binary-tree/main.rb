# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val = 0, left = nil, right = nil)
      @val = val
      @left = left
      @right = right
  end

  def to_s
    if left || right
      [ val, " ( ",  left.to_s, " ", right.to_s , " ) "].join
    else
      val
    end
  end
end
# @param {TreeNode} root
# @return {Integer}
def max_depth(node)
  left_depth = node.left ? max_depth(node.left) : 0
  right_depth = node.right ? max_depth(node.right) : 0

  1 + [ left_depth, right_depth ].max
end


def build_tree(root)
  return [] unless root[0]

  current = 0
  nodes = []

  i = 0
  nodes[i] = TreeNode.new(root[0])
  i = i + 1

  loop do
    break if root[i] == nil

    nodes[i] = TreeNode.new(root[i])
    nodes[current].left = nodes[i]
    i = i + 1

    nodes[i] = TreeNode.new(root[i])
    nodes[current].right = nodes[i]
    i = i + 1

    current = current + 1

    while root[current] == "null"
      current = current + 1
    end
  end

  nodes
end

nodes = build_tree([3,9,20,'null','null',15,7])
puts nodes[0].to_s

puts max_depth(nodes[0])